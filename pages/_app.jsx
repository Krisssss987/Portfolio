import "#/styles/normalize.css";
import "#/styles/globals.css";
import Script from "next/script";
import { useRegisterGsapScrollTrigger, useSmoothScroll } from "#/hooks";
import { Common } from "#/components";
import { AnimationsProvider } from "#/context";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "#/styles/prism-overrides.css";

function MyApp({ Component, pageProps }) {
	//Register gsap
	useRegisterGsapScrollTrigger();

	//Add smoothscroll polyfill for safari
	useSmoothScroll();

	return (
		<>
			<Script
				async
				strategy="lazyOnload"
			></Script>
			<Script strategy="lazyOnload" id="analytics">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
				`}
			</Script>

			{Component.withAnim ? (
				<AnimationsProvider>
					<Component {...pageProps} />
					<Common />
				</AnimationsProvider>
			) : (
				<Component {...pageProps} />
			)}
		</>
	);
}

export default MyApp;
