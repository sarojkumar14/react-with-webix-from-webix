export function toggleWidget(_this) {
    (_this.currentTarget.parentElement.getAttribute('aria-hidden') === "true")?_this.currentTarget.parentElement.setAttribute('aria-hidden', false):_this.currentTarget.parentElement.setAttribute('aria-hidden', true)
}