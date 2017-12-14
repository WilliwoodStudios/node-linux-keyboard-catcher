{
  'targets': [{
    'target_name': 'linux-keyboard-catcher-platform-constants',
    'sources': ['platformConstants.cpp'],
    "include_dirs": ["<!(node -e \"require('nan')\")"]
  }]
}
