const startBtn = document.getElementById("startBtn");
const decryptBtn = document.getElementById("decryptBtn");
const state = document.getElementById("state");
const result = document.getElementById("result");
const decryptState = document.getElementById("decryptState");
const decryptResult = document.getElementById("decryptResult");

function setState(target, text, cls) {
  target.className = `state ${cls}`;
  target.textContent = text;
}

function valueOf(id) {
  return document.getElementById(id).value.trim();
}

startBtn.addEventListener("click", async () => {
  const payload = {
    url: valueOf("url"),
    endpoint: valueOf("endpoint"),
    terminal: valueOf("terminal") || "h5",
    merchant: valueOf("merchant"),
    username: valueOf("username"),
    password: valueOf("password"),
    waitMs: Number(valueOf("waitMs") || 5000),
    loginWaitMs: Number(valueOf("loginWaitMs") || 3000),
    headed: document.getElementById("headed").checked,
  };

  if (!payload.url) {
    setState(state, "缺少 URL", "error");
    result.textContent = "请输入线上 URL。";
    return;
  }

  startBtn.disabled = true;
  setState(state, "抓包中", "running");
  result.textContent = "正在打开页面并等待接口返回...";

  try {
    const response = await fetch("/api/capture", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok || !data.ok) {
      throw new Error(data.error || `HTTP ${response.status}`);
    }
    setState(state, "完成", "done");
    result.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    setState(state, "失败", "error");
    result.textContent = error && error.stack ? error.stack : String(error);
  } finally {
    startBtn.disabled = false;
  }
});

decryptBtn.addEventListener("click", async () => {
  const payload = {
    url: valueOf("url"),
    terminal: valueOf("terminal") || "h5",
    payload: valueOf("decryptPayload"),
    key: valueOf("decryptKey"),
    headed: document.getElementById("headed").checked,
  };

  if (!payload.url) {
    setState(decryptState, "缺少 URL", "error");
    decryptResult.textContent = "请输入线上 URL，用于加载对应线上包的 AESDec。";
    return;
  }
  if (!payload.payload) {
    setState(decryptState, "缺少密文", "error");
    decryptResult.textContent = "请粘贴接口返回密文或完整抓包片段。";
    return;
  }

  decryptBtn.disabled = true;
  setState(decryptState, "解密中", "running");
  decryptResult.textContent = "正在加载线上包并执行 AESDec...";

  try {
    const response = await fetch("/api/decrypt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok || !data.ok) {
      throw new Error(data.error || `HTTP ${response.status}`);
    }
    setState(decryptState, "完成", "done");
    decryptResult.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    setState(decryptState, "失败", "error");
    decryptResult.textContent = error && error.stack ? error.stack : String(error);
  } finally {
    decryptBtn.disabled = false;
  }
});
