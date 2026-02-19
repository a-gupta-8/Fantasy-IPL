import json
import os
from datetime import datetime

# Ensure data folder exists
os.makedirs("data", exist_ok=True)

data = {
    "last_updated": datetime.utcnow().isoformat()
}

with open("data/last-updated.json", "w") as f:
    json.dump(data, f, indent=2)

print("Updated datetime")

