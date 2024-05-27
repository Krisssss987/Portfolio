import styles from "./styles.module.scss";
import { Ref } from "react";

export default function ThoughtOne({ textWrapperRef }: { textWrapperRef: Ref<HTMLDivElement> }) {
	const firstParagraph = [
		{
			sentence: "Our ",
			color: "ash",
			key: 0,
		},
		{
			sentence: "creations",
			color: "white",
			key: 1,
		},
		{
			sentence: " and the ",
			color: "ash",
			key: 2,
		},
		{
			sentence: "caliber of our work ",
			color: "white",
			key: 3,
		},
		{
			sentence: "speak volumes about our ",
			color: "ash",
			key: 4,
		},
		{
			sentence: "identity.",
			color: "white",
			key: 5,
		}
	];

	const secondParagraph = [
		{
			sentence: "That's why I am committed to ",
			color: "ash",
			key: 0,
		},
		{
			sentence: "Creativity",
			color: "white",
			key: 1,
		},
		{
			sentence: " in everything I do.",
			color: "ash",
			key: 2,
		}
	];

	const thirdParagraph = [
		{
			sentence: "Whether it's crafting ",
			color: "ash",
			key: 0,
		},
		{
			sentence: "clean and scalable code",
			color: "white",
			key: 1,
		},
		{
			sentence: " efficient algorithms",
			color: "ash",
			key: 2,
		},
		{
			sentence: " to achieve",
			color: "ash",
			key: 3,
		},
		{
			sentence: " efficient algorithms",
			color: "white",
			key: 4,
		},
		{
			sentence: " to achieve",
			color: "ash",
			key: 5,
		},
		{
			sentence: ` peak performance`,
			color: "white",
			key: 7,
		},
		{
			sentence: ` because`,
			color: "ash",
			key: 8,
		},
		{
			sentence: ` "Efficiency is Everything."`,
			color: "white",
			key: 9,
		},
	];

	const fourthParagraph = [
		{
			sentence: "One word which defines ",
			color: "ash",
			key: 0,
		},
		{
			sentence: "my approach",
			color: "white",
			key: 1,
		},
		{
			sentence: " 👇🏾",
			color: "ash",
			key: 2,
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.containerInner}>
				<div className={styles.paragraphWrapper} ref={textWrapperRef}>
					<p className={styles.paragraph}>
						{firstParagraph.map((item) => {
							const { color, sentence, key } = item;

							if (color === "white") {
								return (
									<strong key={key}>
										{sentence.split(" ").map((item, i) => {
											return (
												<span className={styles.wordWrapper} key={item + i}>
													<span className={styles.word} data-key="word">
														{item}&nbsp;
													</span>
												</span>
											);
										})}
									</strong>
								);
							} else {
								return sentence.split(" ").map((item) => {
									return (
										<span className={styles.wordWrapper} key={key + item}>
											<span className={styles.word} data-key="word">
												{item}&nbsp;
											</span>
										</span>
									);
								});
							}
						})}
					</p>
					<p className={styles.paragraph}>
						{secondParagraph.map((item) => {
							const { color, sentence, key } = item;
							if (color === "white") {
								return (
									<strong key={key}>
										{sentence.split(" ").map((item, i) => {
											return (
												<span className={styles.wordWrapper} key={item + i}>
													<span className={styles.word} data-key="word">
														{item}&nbsp;
													</span>
												</span>
											);
										})}
									</strong>
								);
							} else {
								return sentence.split(" ").map((item) => {
									return (
										<span className={styles.wordWrapper} key={key + item}>
											<span className={styles.word} data-key="word">
												{item}&nbsp;
											</span>
										</span>
									);
								});
							}
						})}
					</p>
					<p className={styles.paragraph}>
						{thirdParagraph.map((item) => {
							const { color, sentence, key } = item;
							if (color === "white") {
								return (
									<strong key={key}>
										{sentence.split(" ").map((item, i) => {
											return (
												<span className={styles.wordWrapper} key={item + i}>
													<span className={styles.word} data-key="word">
														{item}&nbsp;
													</span>
												</span>
											);
										})}
									</strong>
								);
							} else {
								return sentence.split(" ").map((item) => {
									return (
										<span className={styles.wordWrapper} key={key + item}>
											<span className={styles.word} data-key="word">
												{item}&nbsp;
											</span>
										</span>
									);
								});
							}
						})}
					</p>
					<p className={styles.paragraph}>
						{fourthParagraph.map((item) => {
							const { color, sentence, key } = item;
							if (color === "white") {
								return (
									<strong key={key}>
										{sentence.split(" ").map((item, i) => {
											return (
												<span className={styles.wordWrapper} key={item + i}>
													<span className={styles.word} data-key="word">
														{item}&nbsp;
													</span>
												</span>
											);
										})}
									</strong>
								);
							} else {
								return sentence.split(" ").map((item) => {
									return (
										<span className={styles.wordWrapper} key={key + item}>
											<span className={styles.word} data-key="word">
												{item}&nbsp;
											</span>
										</span>
									);
								});
							}
						})}
					</p>
				</div>
			</div>
		</div>
	);
}
