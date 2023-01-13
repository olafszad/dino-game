// HOW TO USE
// In component script setup add this line
// const resizeObserver = useResizeObserver();
// then you can use every data property in this composable

// TODO Change this to singleton
export default function useResizeObserver() {
  // Props
  const data = reactive({
    windowInnerWidth: 0,
  });

  // a composable can update its managed state over time.
  function update() {
    data.windowInnerWidth = window.innerWidth;
  }

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  onMounted(() => {
    data.windowInnerWidth = window.innerWidth;
    window.addEventListener("resize", update);
  });
  onUnmounted(() => window.removeEventListener("resize", update));

  return data;
}
