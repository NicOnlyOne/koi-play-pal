// Web Audio API sound effects for Hanafuda game
let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!audioCtx) audioCtx = new AudioContext();
  return audioCtx;
}

function playTone(freq: number, duration: number, type: OscillatorType = 'sine', volume = 0.15) {
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration);
}

export function playCardFlip() {
  const ctx = getCtx();
  const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.08, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.02));
  }
  const src = ctx.createBufferSource();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = 2000;
  src.buffer = buffer;
  gain.gain.value = 0.1;
  src.connect(filter).connect(gain).connect(ctx.destination);
  src.start();
}

export function playCardMatch() {
  playTone(523, 0.12, 'sine', 0.12);
  setTimeout(() => playTone(659, 0.12, 'sine', 0.12), 80);
  setTimeout(() => playTone(784, 0.18, 'sine', 0.1), 160);
}

export function playCardPlace() {
  playTone(220, 0.08, 'triangle', 0.08);
}

export function playKoiKoi() {
  const notes = [523, 659, 784, 1047];
  notes.forEach((freq, i) => {
    setTimeout(() => playTone(freq, 0.2, 'sine', 0.12), i * 120);
  });
}

export function playYakuComplete() {
  const notes = [392, 523, 659, 784, 1047];
  notes.forEach((freq, i) => {
    setTimeout(() => playTone(freq, 0.25, 'triangle', 0.13), i * 150);
  });
}

export function playGameOver() {
  const notes = [523, 392, 330, 262];
  notes.forEach((freq, i) => {
    setTimeout(() => playTone(freq, 0.3, 'sine', 0.1), i * 200);
  });
}

export function playDraw() {
  playTone(330, 0.1, 'triangle', 0.08);
  setTimeout(() => playTone(440, 0.1, 'triangle', 0.08), 60);
}
