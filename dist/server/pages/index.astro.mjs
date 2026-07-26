import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DtbA2OIF.mjs';
import 'piccolore';
import { $ as $$Search } from '../chunks/Search_BTcBuh7S.mjs';
import { $ as $$Main } from '../chunks/Main_DpKIZXbD.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex-1 flex flex-col items-center justify-center px-4"> <h1 class="text-4xl md:text-6xl font-bold text-text tracking-tighter mb-10 uppercase">
Yeeterstellar
</h1> <p id="tagline" class="min-h-[1.25rem] mb-5 -mt-8 text-sm md:text-base text-text-secondary/80 tracking-wide leading-5 opacity-0 transition-opacity duration-150"></p> <div class="w-full max-w-xl"> <div class="relative"> ${renderComponent($$result2, "Search", $$Search, { "class": "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary", "strokeWidth": 2 })} <input id="search" class="w-full h-12 pl-10 pr-4 rounded-[6px] bg-white/5 border border-white/10 text-sm text-text placeholder:text-text-placeholder focus:outline-none focus:border-white/25 focus:bg-white/[0.07]" placeholder="Search or enter URL" type="search" autocomplete="off" spellcheck="false"> </div> </div> </div> ` })} ${renderScript($$result, "/Users/ryancurtis/Interstellar-Astro/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/ryancurtis/Interstellar-Astro/src/pages/index.astro", void 0);

const $$file = "/Users/ryancurtis/Interstellar-Astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
