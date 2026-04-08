#!/usr/bin/env node

/**
 * Validation script for Skillshelf Open Design registry
 * Run with: npm run validate
 */

const fs = require('fs');
const path = require('path');

const REGISTRY_PATH = path.join(process.cwd(), 'registry.json');
const SKILLS_DIR = path.join(process.cwd(), 'skills');

let errors = [];
let warnings = [];
let passed = 0;

function log(message, type = 'info') {
  const prefix = {
    error: '❌',
    warn: '⚠️',
    pass: '✅',
    info: '📋'
  }[type];
  console.log(`${prefix} ${message}`);
}

function error(message) {
  errors.push(message);
  log(message, 'error');
}

function warn(message) {
  warnings.push(message);
  log(message, 'warn');
}

function pass(message) {
  passed++;
  log(message, 'pass');
}

// Check if registry.json exists
if (!fs.existsSync(REGISTRY_PATH)) {
  error('registry.json not found');
  process.exit(1);
}

// Parse registry.json
let registry;
try {
  const content = fs.readFileSync(REGISTRY_PATH, 'utf8');
  registry = JSON.parse(content);
  pass('registry.json is valid JSON');
} catch (e) {
  error(`Failed to parse registry.json: ${e.message}`);
  process.exit(1);
}

// Check registry structure
if (!registry.version) {
  warn('registry.json missing "version" field');
}

if (!Array.isArray(registry.skills)) {
  error('registry.json missing "skills" array');
  process.exit(1);
}

pass(`Found ${registry.skills.length} skill(s) in registry`);

// Check skills directory exists
if (!fs.existsSync(SKILLS_DIR)) {
  error('skills/ directory not found');
  process.exit(1);
}

// Validate each skill
for (const skill of registry.skills) {
  console.log(`\n🔍 Validating: ${skill.slug}`);

  // Required fields
  const requiredFields = ['slug', 'title', 'category', 'description', 'files'];
  for (const field of requiredFields) {
    if (!skill[field]) {
      error(`  Missing required field: ${field}`);
    }
  }

  if (!skill.files) continue;

  // Check files exist
  const skillDir = path.join(SKILLS_DIR, skill.slug);
  const requiredFiles = [
    { key: 'skill', name: 'SKILL.md' },
    { key: 'preview', name: 'preview.html' },
    { key: 'cover', name: 'cover.png' }
  ];

  for (const file of requiredFiles) {
    const filePath = path.join(skillDir, skill.files[file.key] || file.name);
    if (!fs.existsSync(filePath)) {
      error(`  Missing file: ${file.name} (expected at ${filePath})`);
    } else {
      pass(`  Found: ${file.name}`);
    }
  }

  // Validate SKILL.md structure
  const skillMdPath = path.join(skillDir, skill.files.skill || 'SKILL.md');
  if (fs.existsSync(skillMdPath)) {
    const content = fs.readFileSync(skillMdPath, 'utf8');

    // Check for SkillShelf markers
    if (!content.includes('<!-- SkillShelf_START -->') || !content.includes('<!-- SkillShelf_END -->')) {
      warn('  SKILL.md missing SkillShelf_START/END markers');
    }

    // Check for required sections (basic check)
    const sections = [
      'Mission',
      'Brand',
      'Style Foundations',
      'Component Families',
      'Rules: Do',
      'Rules: Don\'t',
      'Expected Behavior',
      'Quality Gates'
    ];

    for (const section of sections) {
      if (!content.includes(section)) {
        warn(`  SKILL.md might be missing section: ${section}`);
      }
    }
  }

  // Validate preview.html
  const previewPath = path.join(skillDir, skill.files.preview || 'preview.html');
  if (fs.existsSync(previewPath)) {
    const content = fs.readFileSync(previewPath, 'utf8');
    if (!content.includes('<!DOCTYPE html>')) {
      warn('  preview.html missing DOCTYPE');
    }
    if (!content.includes('<html')) {
      warn('  preview.html missing <html> tag');
    }
  }
}

// Summary
console.log('\n' + '='.repeat(50));
console.log('📊 Validation Summary');
console.log('='.repeat(50));
console.log(`✅ Passed: ${passed}`);
console.log(`⚠️  Warnings: ${warnings.length}`);
console.log(`❌ Errors: ${errors.length}`);

if (errors.length > 0) {
  console.log('\n❌ Validation failed. Please fix the errors above.');
  process.exit(1);
} else if (warnings.length > 0) {
  console.log('\n⚠️  Validation passed with warnings. Consider addressing them.');
  process.exit(0);
} else {
  console.log('\n✅ All validations passed! Ready to commit.');
  process.exit(0);
}
