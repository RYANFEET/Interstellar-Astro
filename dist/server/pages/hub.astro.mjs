import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DtbA2OIF.mjs';
import 'piccolore';
import { $ as $$Main } from '../chunks/Main_DpKIZXbD.mjs';
export { renderers } from '../renderers.mjs';

const $$Hub = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col w-full h-[calc(100vh-3.5rem)]"> <div class="px-4 py-3 border-b border-white/10 bg-background/70 backdrop-blur-sm flex items-center justify-between gap-3"> <div class="min-w-0"> <h1 class="text-sm font-medium text-text uppercase tracking-wide">Personal Hub</h1> <p class="text-xs text-text-secondary truncate">
m7tdgyjhcr.wixsite.com/personal-hub
</p> </div> <a class="shrink-0 inline-flex items-center justify-center rounded px-3 py-1.5 text-xs text-text-secondary hover:text-text hover:bg-white/10 transition-all" href="https://m7tdgyjhcr.wixsite.com/personal-hub" target="_blank" rel="noreferrer">
Open
</a> </div> <iframe class="flex-1 w-full bg-background" src="https://m7tdgyjhcr.wixsite.com/personal-hub" referrerpolicy="no-referrer" loading="lazy" title="Personal Hub"></iframe> </div> ` })}`;
}, "/Users/ryancurtis/Interstellar-Astro/src/pages/hub.astro", void 0);

const $$file = "/Users/ryancurtis/Interstellar-Astro/src/pages/hub.astro";
const $$url = "/hub";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hub,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
