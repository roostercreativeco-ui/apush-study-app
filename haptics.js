function triggerHaptic(type = 'tap') {
  if (!('vibrate' in navigator)) return;

  switch (type) {
    case 'tap':
      navigator.vibrate(12);
      break;
    case 'correct':
      navigator.vibrate(30);
      break;
    case 'wrong':
      navigator.vibrate([20, 40, 20]);
      break;
    case 'success':
      navigator.vibrate([18, 18, 18]);
      break;
    case 'levelup':
      navigator.vibrate([30, 25, 60]);
      break;
    default:
      navigator.vibrate(10);
  }
}
