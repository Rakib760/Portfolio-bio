const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Portfolio Application...');
console.log('📦 Starting Backend Server...');

// Start backend
const backend = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, 'backend'),
  shell: true,
  stdio: 'inherit'
});

// Wait for backend to start, then start frontend
setTimeout(() => {
  console.log('⚛️  Starting Frontend...');
  const frontend = spawn('npm', ['start'], {
    cwd: path.join(__dirname, 'client'),
    shell: true,
    stdio: 'inherit'
  });

  // Handle cleanup
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down servers...');
    backend.kill('SIGINT');
    frontend.kill('SIGINT');
    process.exit();
  });

}, 3000);