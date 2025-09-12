export function useTrapFocus(
  element_ref: Ref<HTMLElement | null>,
  onEscape?: () => void,
) {
  watchEffect((onCleanup) => {
    if (!element_ref.value) return;

    const element_responsible_for_opening =
      document.activeElement as HTMLElement;

    const focusable_elements = Array.from(
      element_ref.value.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
    );

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onEscape?.();
        return;
      }

      if (event.key !== "Tab") return;

      const first = focusable_elements.at(0);
      const last = focusable_elements.at(-1);
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        last?.focus();
        event.preventDefault();
      }

      if (!event.shiftKey && active === last) {
        first?.focus();
        event.preventDefault();
      }
    }

    focusable_elements[0]?.focus();
    element_ref.value.addEventListener("keydown", handleKeydown);

    onCleanup(() => {
      element_ref.value?.removeEventListener("keydown", handleKeydown);
      element_responsible_for_opening?.focus();
    });
  });
}
