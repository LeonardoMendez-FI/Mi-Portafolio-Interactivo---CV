from pathlib import Path
import json, sys
root = Path(__file__).resolve().parents[1] / 'data'
failed = False
for path in sorted(root.glob('*.json')):
    try:
        json.loads(path.read_text(encoding='utf-8'))
        print(f'[OK] {path.name}')
    except Exception as exc:
        failed = True
        print(f'[ERROR] {path.name}: {exc}')
sys.exit(1 if failed else 0)
