import random
import time

def fake_id():
    return hex(random.randint(0, 999999))[2:]

def fetch():
    time.sleep(0.3)
    return {"id": fake_id(), "ok": True}

if __name__ == "__main__":
    print(fetch())
