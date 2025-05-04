#!/bin/bash
# 404foundart Project Initialization Script

# Define project directory
PROJECT_DIR="/Users/amc/Documents/404notfound-art/404foundart"

# Create project directory if it doesn't exist
mkdir -p "$PROJECT_DIR"
cd "$PROJECT_DIR"

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
  git init
  git remote add origin https://github.com/WOOPS21212/404foundart.git
else
  echo "Git repository already initialized"
fi

# Create necessary directories
mkdir -p css js images

# Create index.html
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404found.art</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" type="image/x-icon" href="images/favicon.ico">
</head>
<body>
    <div class="container">
        <h1>hello.</h1>
        <p>I'm building stuff. One moment please<span class="dot" style="--i: 1"></span><span class="dot" style="--i: 2"></span><span class="dot" style="--i: 3"></span></p>
    </div>
</body>
</html>
EOF

# Create CSS file
cat > css/styles.css << 'EOF'
/* Apple-inspired font styles */
@font-face {
    font-family: 'SF Pro Display';
    src: url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/webfonts/free-regular-svg-icons.svg'); /* Placeholder */
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'SF Pro Text';
    src: url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/webfonts/free-regular-svg-icons.svg'); /* Placeholder */
    font-weight: normal;
    font-style: normal;
}

body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
    font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #333;
    text-align: center;
}

.container {
    padding: 20px;
    max-width: 600px;
}

h1 {
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 500;
    font-size: 32px;
    margin-bottom: 16px;
}

p {
    font-size: 18px;
    line-height: 1.5;
    color: #666;
    margin-bottom: 30px;
}

.dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #333;
    margin: 0 4px;
    animation: fade 1.5s infinite;
    animation-delay: calc(0.3s * var(--i));
}

@keyframes fade {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1; }
}
EOF

# Create package.json for npm dependencies
cat > package.json << 'EOF'
{
  "name": "404foundart",
  "version": "1.0.0",
  "description": "Landing page for 404found.art",
  "scripts": {
    "start": "live-server --port=3000 --no-browser"
  },
  "devDependencies": {
    "live-server": "^1.2.2"
  }
}
EOF

# Create Claude Task Master configuration
cat > claude-task-master.json << 'EOF'
{
  "project": "404found.art Landing Page",
  "tasks": [
    {
      "name": "Start Development Server",
      "command": "npm start",
      "directory": "/Users/amc/Documents/404notfound-art/404foundart",
      "autostart": true
    },
    {
      "name": "Git Status",
      "command": "git status",
      "directory": "/Users/amc/Documents/404notfound-art/404foundart"
    },
    {
      "name": "Commit Changes",
      "command": "git add . && git commit -m \"Update landing page\"",
      "directory": "/Users/amc/Documents/404notfound-art/404foundart"
    },
    {
      "name": "Push to GitHub",
      "command": "git push origin main",
      "directory": "/Users/amc/Documents/404notfound-art/404foundart"
    }
  ]
}
EOF

# Create a simple README
cat > README.md << 'EOF'
# 404found.art

Simple landing page for 404found.art while the full portfolio is being built.

## Development

This project uses live-server for development with auto-refresh functionality.

To start the development server:
```
npm install
npm start
```

## Task Management

This project uses Claude Task Master for workflow automation. See claude-task-master.json for available tasks.
EOF

# Install dependencies
npm install

echo "Project initialization complete!"
echo "To start the development server, run: npm start"
echo "Or use Claude Task Master to manage tasks"