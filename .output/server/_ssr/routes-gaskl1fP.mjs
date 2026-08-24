import { n as __toESM } from "../_runtime.mjs";
import { a as useMotionValueEvent, i as useScroll, n as useTransform, r as useMotionValue, t as useSpring } from "../_libs/framer-motion+[...].mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as Gift, c as Cake, i as Instagram, l as Bike, n as MessageCircle, o as CupSoda, r as MapPin, s as CalendarHeart, t as Truck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-gaskl1fP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Fundo vivo: blobs de cacau/rosé que flutuam, reagem ao scroll e ao mouse,
* mais uma barra de progresso de leitura no topo.
*/
function AmbientBackground() {
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		mass: .3
	});
	const shiftA = useTransform(progress, [0, 1], ["0%", "28%"]);
	const shiftB = useTransform(progress, [0, 1], ["0%", "-32%"]);
	const hueRotate = useTransform(progress, [0, 1], ["0deg", "24deg"]);
	const [pointer, setPointer] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		const onMove = (e) => {
			setPointer({
				x: (e.clientX / window.innerWidth - .5) * 40,
				y: (e.clientY / window.innerHeight - .5) * 40
			});
		};
		window.addEventListener("pointermove", onMove);
		return () => window.removeEventListener("pointermove", onMove);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		style: { filter: hueRotate ? void 0 : void 0 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "blob animate-float-slow size-[46rem] bg-rose-soft/70",
				style: {
					top: "-14rem",
					left: "-12rem",
					y: shiftA,
					x: pointer.x
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "blob animate-float-slow size-[38rem] bg-dourado/45",
				style: {
					top: "38%",
					right: "-10rem",
					y: shiftB,
					x: -pointer.x
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "blob animate-float-slow size-[42rem] bg-rose/35",
				style: {
					bottom: "-16rem",
					left: "22%",
					y: shiftA,
					x: pointer.y
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent,var(--creme)_75%)]" })
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-rose",
		style: { scaleX: progress }
	})] });
}
var WHATSAPP_URL = "https://wa.me/5561995832234?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20encomenda%20na%20Santo%20Doce.";
var INSTAGRAM_URL = "https://www.instagram.com/santodocedf/";
var links = [
	{
		label: "Quem somos",
		href: "#quem-somos"
	},
	{
		label: "O que fazemos",
		href: "#o-que-fazemos"
	},
	{
		label: "Sabores",
		href: "#sabores"
	},
	{
		label: "Festival",
		href: "#festival"
	},
	{
		label: "Contato",
		href: "#contato"
	}
];
function Nav() {
	const { scrollY } = useScroll();
	const [solid, setSolid] = (0, import_react.useState)(false);
	useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 60));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -80,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: 1,
			delay: .2,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "fixed inset-x-0 top-0 z-40 px-4 pt-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${solid ? "glass-doce shadow-doce" : "border border-transparent"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex flex-col leading-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xs tracking-[0.4em] text-muted-foreground uppercase",
						children: "Santo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-script text-2xl text-primary",
						children: "Doce"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: l.href,
						className: "group relative text-sm text-foreground/80 transition-colors hover:text-primary",
						children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-gradient-rose transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" })]
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
					href: WHATSAPP_URL,
					target: "_blank",
					rel: "noreferrer",
					whileHover: { scale: 1.05 },
					whileTap: { scale: .96 },
					className: "rounded-full bg-gradient-cacau px-5 py-2.5 text-xs font-medium tracking-widest text-primary-foreground uppercase shadow-doce",
					children: "Encomendar"
				})
			]
		})
	});
}
/** Revela o conteúdo com fade + subida quando entra na viewport. */
function Reveal({ children, delay = 0, y = 40, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y,
			filter: "blur(10px)"
		},
		whileInView: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: true,
			margin: "-10% 0px -10% 0px"
		},
		transition: {
			duration: .9,
			delay,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		children
	});
}
/** Divide o texto em palavras e anima uma a uma. */
function SplitWords({ text, className, wordClassName, delay = 0 }) {
	const words = text.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className,
		children: words.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block overflow-hidden pb-[0.08em] align-bottom",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				className: `inline-block ${wordClassName ?? ""}`,
				initial: {
					y: "110%",
					opacity: 0,
					rotate: 4
				},
				whileInView: {
					y: "0%",
					opacity: 1,
					rotate: 0
				},
				viewport: { once: true },
				transition: {
					duration: 1,
					delay: delay + i * .07,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				children: [word, i < words.length - 1 ? "\xA0" : ""]
			})
		}, `${word}-${i}`))
	});
}
/** Parallax vertical suave conforme o elemento cruza a tela. */
function useParallax(distance = 80) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
	return {
		ref,
		y: useSpring(raw, {
			stiffness: 90,
			damping: 22,
			mass: .4
		}),
		progress: scrollYProgress
	};
}
var ana_luiza_jpeg_asset_default = {
	version: 1,
	asset_id: "e9be12bf-d208-4d10-8b54-92dc8450dbc5",
	project_id: "9c550dd8-6b8a-4df3-9f97-5c68c9c50e1f",
	url: "src/assets/ana.png",
	r2_key: "a/v1/9c550dd8-6b8a-4df3-9f97-5c68c9c50e1f/e9be12bf-d208-4d10-8b54-92dc8450dbc5/src/assets/ana.png",
	original_filename: "ana-luiza.jpeg",
	size: 507860,
	content_type: "src/assets/ana.png",
	created_at: "2026-08-24T16:58:10Z"
};
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const smooth = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 26,
		mass: .4
	});
	const textY = useTransform(smooth, [0, 1], [0, -140]);
	const imgY = useTransform(smooth, [0, 1], [0, 90]);
	const imgScale = useTransform(smooth, [0, 1], [1, 1.12]);
	const fade = useTransform(smooth, [0, .8], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		ref,
		className: "relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-32 pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y: textY,
					opacity: fade
				},
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
						initial: {
							opacity: 0,
							x: -20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							delay: .4,
							duration: .8
						},
						className: "inline-flex items-center gap-2 rounded-full border border-rose/40 bg-card/60 px-4 py-1.5 text-[11px] tracking-[0.3em] text-muted-foreground uppercase backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 animate-pulse rounded-full bg-accent" }), "Recanto das Emas · DF"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
								text: "Doces feitos para criar",
								delay: .5
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
								text: "memórias",
								delay: .95,
								wordClassName: "font-script text-gradient-shine pr-2 text-6xl sm:text-7xl lg:text-8xl"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: 1.2,
							duration: .9
						},
						className: "mt-7 max-w-md text-base leading-relaxed text-muted-foreground",
						children: "Bolos, sobremesas e doces artesanais feitos em família — massa no ponto, recheio generoso e aquele carinho que dá pra sentir na primeira garfada."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: 1.4,
							duration: .9
						},
						className: "mt-9 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							href: WHATSAPP_URL,
							target: "_blank",
							rel: "noreferrer",
							whileHover: {
								scale: 1.04,
								y: -2
							},
							whileTap: { scale: .97 },
							className: "group relative overflow-hidden rounded-full bg-gradient-cacau px-8 py-4 text-sm font-medium tracking-widest text-primary-foreground uppercase shadow-lift",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative z-10",
								children: "Peça pelo WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 translate-y-full bg-gradient-rose transition-transform duration-500 group-hover:translate-y-0" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#sabores",
							className: "group inline-flex items-center gap-2 text-sm tracking-widest text-primary uppercase",
							children: ["Ver sabores", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "transition-transform duration-300 group-hover:translate-x-1",
								children: "→"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex gap-10",
						children: [
							{
								n: "+1.400",
								l: "clientes doces"
							},
							{
								n: "57",
								l: "criações no feed"
							},
							{
								n: "100%",
								l: "artesanal"
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: 1.6 + i * .12,
								duration: .7
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl text-primary",
								children: s.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.2em] text-muted-foreground uppercase",
								children: s.l
							})]
						}, s.l))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y: imgY,
					scale: imgScale
				},
				className: "relative mx-auto w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							scale: .6,
							opacity: 0
						},
						animate: {
							scale: 1,
							opacity: 1
						},
						transition: {
							duration: 1.3,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "absolute inset-4 rounded-full bg-gradient-to-r from-rose-300 blur-2xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						"aria-hidden": true,
						className: "absolute inset-0 rounded-full border border-dashed border-primary/30",
						animate: { rotate: 360 },
						transition: {
							duration: 60,
							repeat: Infinity,
							ease: "linear"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: ana_luiza_jpeg_asset_default.url,
						alt: "Ana Luiza, confeiteira da Santo Doce, segurando uma bandeja de brownies artesanais",
						width: 880,
						height: 1160,
						initial: {
							opacity: 0,
							y: 60
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1.2,
							delay: .3,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "relative z-10 w-full mix-blend-multiply drop-shadow-[0_30px_50px_rgba(60,30,20,0.28)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .8
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							delay: 1.5,
							duration: .8
						},
						className: "glass-doce absolute bottom-6 -left-2 z-20 animate-drift rounded-2xl px-5 py-3 shadow-doce",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-xl text-primary",
							children: "Ana Luiza"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] tracking-[0.25em] text-muted-foreground uppercase",
							children: "Confeiteira & fundadora"
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: { opacity: fade },
			className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-muted-foreground uppercase",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				animate: { y: [
					0,
					8,
					0
				] },
				transition: {
					duration: 2,
					repeat: Infinity
				},
				className: "block",
				children: "role"
			})
		})]
	});
}
var items = [
	"bolos artesanais",
	"brownies",
	"copos da felicidade",
	"sobremesas",
	"bolos de festa",
	"doces finos",
	"festival de fatias"
];
function Marquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-hidden border-y border-border/60 bg-gradient-cacau py-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "animate-marquee flex w-max gap-12 whitespace-nowrap",
			children: [...items, ...items].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-display text-xl tracking-[0.2em] text-primary-foreground/80 uppercase",
				children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-12 text-accent",
					children: "✦"
				})]
			}, `${item}-${i}`))
		})
	});
}
var brownie_default = "/assets/brownie-Cd4vgDkl.jpg";
var copos_sobremesa_default = "/assets/copos-sobremesa-DrV1_tEb.jpg";
function QuemSomos() {
	const a = useParallax(60);
	const b = useParallax(-50);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "quem-somos",
		className: "relative px-6 py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						ref: a.ref,
						style: { y: a.y },
						className: "relative z-10 w-[72%]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: brownie_default,
							alt: "Brownies artesanais da Santo Doce sobre boleira de vidro",
							loading: "lazy",
							width: 1024,
							height: 1280,
							className: "rounded-[2rem] shadow-lift"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						ref: b.ref,
						style: { y: b.y },
						className: "absolute -right-2 bottom-[-3rem] z-20 w-[52%]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: copos_sobremesa_default,
							alt: "Copos de sobremesa em camadas de chocolate e creme",
							loading: "lazy",
							width: 1280,
							height: 1024,
							className: "rounded-[1.5rem] border-4 border-card shadow-doce"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "blob absolute -top-10 -left-10 size-64 bg-rose/40" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] tracking-[0.4em] text-accent uppercase",
					children: "Quem somos"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 text-4xl leading-tight sm:text-5xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Um negócio de família, nascido" }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-script text-gradient-shine text-5xl sm:text-6xl",
							children: "dentro de casa"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 space-y-5 text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A Santo Doce começou com a Ana Luiza aprendendo receitas ao lado da mãe — e descobrindo que cozinhar também é uma forma de demonstrar carinho. Da cozinha de casa vieram os primeiros bolos, os primeiros pedidos e a certeza de que ali estava a sua profissão." })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Vieram então os cursos de massas, chocolate e confeitaria, as experiências em outras confeitarias e, com elas, a técnica que hoje sustenta cada receita da casa." })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .3,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-foreground",
								children: "Mais do que vender doces, queremos entregar momentos especiais — feitos com qualidade, dedicação e muito amor."
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .4,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script mt-8 text-3xl text-primary",
						children: "Ana Luiza"
					})
				})
			] })]
		})
	});
}
var servicos = [
	{
		icon: Cake,
		title: "Bolos artesanais",
		text: "Massas fofinhas de baunilha ou chocolate 70% cacau, com recheios cremosos e camadas generosas."
	},
	{
		icon: CupSoda,
		title: "Sobremesas & copos",
		text: "Copos da felicidade, brownies, doces finos e sobremesas geladas para adoçar qualquer dia."
	},
	{
		icon: Gift,
		title: "Bolos de festa",
		text: "Aniversários, chás e comemorações com decoração personalizada e topo do seu tema favorito."
	},
	{
		icon: Truck,
		title: "Entrega & retirada",
		text: "Retirada no Recanto das Emas ou entrega mediante taxa para Recanto, Riacho e Samambaia."
	}
];
function OQueFazemos() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "o-que-fazemos",
		className: "relative px-6 py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] tracking-[0.4em] text-accent uppercase",
					children: "O que fazemos"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-4xl leading-tight sm:text-5xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Cada pedido sai da cozinha como se fosse pra nossa própria mesa" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: servicos.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						whileHover: { y: -10 },
						transition: {
							type: "spring",
							stiffness: 260,
							damping: 20
						},
						className: "group grain relative h-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/70 p-7 backdrop-blur-sm transition-shadow duration-500 hover:shadow-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 -top-24 h-24 bg-gradient-rose opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-cacau text-primary-foreground shadow-doce",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
									className: "size-5",
									strokeWidth: 1.6
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "relative mt-5 text-2xl",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "relative mt-3 text-sm leading-relaxed text-muted-foreground",
								children: s.text
							})
						]
					})
				}, s.title))
			})]
		})
	});
}
var sabores = [
	{
		img: "/assets/bolo-tropical-Dlh6ZDAv.jpg",
		nome: "Bolo Tropical",
		desc: "Massa branca de baunilha, recheio de doce de leite com ameixa e abacaxi com coco.",
		tag: "Best seller"
	},
	{
		img: "/assets/bolo-maracuja-DaOlNfOT.jpg",
		nome: "Trufado de Maracujá",
		desc: "Massa de chocolate 70% cacau, recheio de chocolate e creme de maracujá.",
		tag: "Cremoso"
	},
	{
		img: "/assets/bolo-prestigio-BAH8TD4w.jpg",
		nome: "Bolo de Prestígio",
		desc: "Camada de chocolate e uma camada bem generosa do nosso recheio de coco.",
		tag: "Clássico"
	}
];
function TiltCard({ item, index }) {
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const rx = useSpring(useTransform(my, [-.5, .5], ["9deg", "-9deg"]), {
		stiffness: 180,
		damping: 18
	});
	const ry = useSpring(useTransform(mx, [-.5, .5], ["-9deg", "9deg"]), {
		stiffness: 180,
		damping: 18
	});
	const handleMove = (e) => {
		const r = e.currentTarget.getBoundingClientRect();
		mx.set((e.clientX - r.left) / r.width - .5);
		my.set((e.clientY - r.top) / r.height - .5);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: index * .12,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			onPointerMove: handleMove,
			onPointerLeave: () => {
				mx.set(0);
				my.set(0);
			},
			style: {
				rotateX: rx,
				rotateY: ry,
				transformPerspective: 1e3
			},
			className: "group relative overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-doce",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[4/5] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.img,
						alt: item.nome,
						loading: "lazy",
						width: 1024,
						height: 1280,
						className: "size-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-cacau-deep/85 via-cacau-deep/10 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-4 left-4 rounded-full bg-card/85 px-3 py-1 text-[10px] tracking-[0.25em] text-primary uppercase backdrop-blur",
						children: item.tag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-3xl text-primary-foreground",
							children: item.nome
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-h-0 overflow-hidden text-sm text-primary-foreground/85 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100",
							children: item.desc
						})]
					})
				]
			})
		})
	});
}
function Sabores() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sabores",
		className: "relative px-6 py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] tracking-[0.4em] text-accent uppercase",
						children: "Sabores"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-4xl leading-tight sm:text-5xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Os campeões de" }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-script text-gradient-shine text-5xl sm:text-6xl",
								children: "pedido"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xs text-sm text-muted-foreground",
						children: "Passe o mouse e conheça o recheio de cada um. Tudo montado no dia, camada por camada."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-7 md:grid-cols-3",
				children: sabores.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
					item: s,
					index: i
				}, s.nome))
			})]
		})
	});
}
var bolo_festa_default = "/assets/bolo-festa-DdB0Fed7.jpg";
var infos = [
	{
		icon: CalendarHeart,
		text: "22 e 23 de agosto · sábado e domingo"
	},
	{
		icon: MapPin,
		text: "Retirada no Recanto das Emas ou entrega mediante taxa"
	},
	{
		icon: Bike,
		text: "Entregas para Recanto, Riacho Fundo e Samambaia"
	}
];
function Festival() {
	const { ref, y } = useParallax(70);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "festival",
		className: "relative px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-cacau shadow-lift",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					ref,
					style: { y },
					src: bolo_festa_default,
					alt: "Bolo de festa decorado da Santo Doce",
					loading: "lazy",
					width: 1280,
					height: 1024,
					className: "absolute inset-0 size-full scale-125 object-cover opacity-25"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-cacau-deep via-cacau-deep/85 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid gap-10 p-10 md:grid-cols-2 md:p-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] tracking-[0.4em] text-dourado uppercase",
							children: "Próximo evento"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl leading-[1.05] text-primary-foreground sm:text-5xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Festival de Fatias" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-script text-gradient-shine text-6xl sm:text-7xl",
									children: "delivery"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md text-primary-foreground/80",
							children: "Uma seleção de fatias bem recheadas, feitas artesanalmente e com muito carinho. Salva a data e chama quem vai dividir uma fatia com você."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-3",
							children: infos.map((i, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1 * idx,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3 text-sm text-primary-foreground/85",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.icon, {
										className: "size-4 text-dourado",
										strokeWidth: 1.6
									}), i.text]
								})
							}, i.text))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
							href: WHATSAPP_URL,
							target: "_blank",
							rel: "noreferrer",
							whileHover: {
								scale: 1.04,
								y: -2
							},
							whileTap: { scale: .97 },
							className: "mt-10 inline-block rounded-full bg-gradient-rose px-8 py-4 text-sm font-medium tracking-widest text-cacau-deep uppercase shadow-doce",
							children: "Garantir minha fatia"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								scale: .85,
								rotate: -6
							},
							whileInView: {
								opacity: 1,
								scale: 1,
								rotate: -3
							},
							viewport: { once: true },
							transition: {
								duration: 1,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							whileHover: {
								rotate: 0,
								scale: 1.03
							},
							className: "glass-doce animate-drift w-full max-w-xs rounded-[2rem] p-8 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] tracking-[0.35em] text-muted-foreground uppercase",
									children: "Sabores do festival"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-5 space-y-3 font-display text-2xl text-primary",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tropical" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Trufado de Maracujá" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Prestígio" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-xs text-muted-foreground",
									children: "Quantidades limitadas ✦"
								})
							]
						})
					})]
				})
			]
		})
	});
}
var depoimentos = [
	{
		texto: "Nossa, o brownie que comprei eu amei, perfeito! Todos lá em casa adoraram.",
		autor: "Karina"
	},
	{
		texto: "São maravilhosooos, pode ter certeza que vou pedir de novo.",
		autor: "Iana Karolina"
	},
	{
		texto: "Ficou perfeito! Bolo fresquinho, recheio generoso e entrega no horário.",
		autor: "Cliente do Recanto"
	}
];
function Depoimentos() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative px-6 py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] tracking-[0.4em] text-accent uppercase",
					children: "Feedback"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 text-4xl leading-tight sm:text-5xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Quem prova," }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-script text-gradient-shine text-5xl sm:text-6xl",
							children: "volta"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-3",
				children: depoimentos.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .12,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
						whileHover: {
							y: -8,
							rotate: i % 2 === 0 ? -1 : 1
						},
						transition: {
							type: "spring",
							stiffness: 240,
							damping: 18
						},
						className: "glass-doce h-full rounded-[1.75rem] p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-script text-5xl leading-none text-accent",
								children: "“"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-lg leading-relaxed text-foreground/90",
								children: d.texto
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-6 text-[11px] tracking-[0.25em] text-muted-foreground uppercase",
								children: d.autor
							})
						]
					})
				}, d.autor))
			})]
		})
	});
}
function Contato() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contato",
		className: "relative overflow-hidden px-6 pt-24 pb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] tracking-[0.4em] text-accent uppercase",
					children: "Contato"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 text-5xl leading-[1.05] sm:text-6xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Vamos adoçar o seu" }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-script text-gradient-shine text-6xl sm:text-7xl",
							children: "momento"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-lg text-muted-foreground",
						children: "Encomendas pelo WhatsApp ou direct do Instagram. Conta pra gente a data, o sabor e a quantidade — o resto é com a nossa cozinha."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .3,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							href: WHATSAPP_URL,
							target: "_blank",
							rel: "noreferrer",
							whileHover: {
								scale: 1.05,
								y: -3
							},
							whileTap: { scale: .97 },
							className: "inline-flex items-center gap-2 rounded-full bg-gradient-cacau px-8 py-4 text-sm font-medium tracking-widest text-primary-foreground uppercase shadow-lift",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								className: "size-4",
								strokeWidth: 1.7
							}), "WhatsApp"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							href: INSTAGRAM_URL,
							target: "_blank",
							rel: "noreferrer",
							whileHover: {
								scale: 1.05,
								y: -3
							},
							whileTap: { scale: .97 },
							className: "inline-flex items-center gap-2 rounded-full border border-primary/25 px-8 py-4 text-sm font-medium tracking-widest text-primary uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
								className: "size-4",
								strokeWidth: 1.7
							}), "@santodocedf"]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .4,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "size-4 text-accent",
							strokeWidth: 1.7
						}), "Recanto das Emas — Brasília / DF"]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "mx-auto mt-20 flex max-w-6xl flex-col items-center gap-3 border-t border-border/60 pt-8 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-script text-3xl text-primary",
				children: "Santo Doce"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] tracking-[0.3em] text-muted-foreground uppercase",
				children: "Confeitaria artesanal · feito com amor"
			})]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmbientBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuemSomos, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OQueFazemos, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sabores, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Festival, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Depoimentos, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contato, {})
		]
	});
}
//#endregion
export { Index as component };
