import styles from "./styles.module.scss";
import { Ref } from "react";

export default function ThoughtTwo({ textWrapperRef }: { textWrapperRef: Ref<HTMLDivElement> }) {
	const firstParagraph = [
		{
			sentence: "In the ",
			color: "ash",
			key: 0,
		},
		{
			sentence: "coding circus, ",
			color: "white",
			key: 1,
		},
		{
			sentence: "we're like clowns juggling new tricks every day.",
			color: "ash",
			key: 2,
		}
	];

	const secondParagraph = [
		{
			sentence: "We ",
			color: "ash",
			key: 1,
		},
		{
			sentence: "adapt ",
			color: "white",
			key: 2,
		},
		{
			sentence: "to tech trends faster than a chameleon changes colors, as our ",
			color: "ash",
			key: 3,
		},
		{
			sentence: "backstage pass to the information",
			color: "white",
			key: 4,
		},
		{
			sentence: " extravaganza.",
			color: "ash",
			key: 5,
		}
	];

	const thirdParagraph = [
		{
			sentence: "Lifelong Learning",
			color: "white",
			key: 1,
		},
		{
			sentence: " is our secret sauce, sprinkled on every line of code",
			color: "ash",
			key: 2,
		},
		{
			sentence: "we write 😅 !",
			color: "white",
			key: 3,
		}
	];

	return (
		<div className={styles.container}>
			<div></div>
			<div className={styles.rightSection}>
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
				</div>
			</div>
		</div>
	);
}
