import styles from "./styles.module.scss";
import { TECH_STACKS } from "#/constants";
import { FaintBgText } from "#/components";
import { Ref } from "react";
import Image from "next/image";

export type SkillsMobileProps = {
	mobileSkillsContainerRef: Ref<HTMLDivElement>;
	mobileSkillsSectionTitlteRef: Ref<HTMLHeadingElement>;
};
export default function SkillsMobile({ mobileSkillsContainerRef, mobileSkillsSectionTitlteRef }: SkillsMobileProps) {
	const displayedSkills: Array<keyof typeof TECH_STACKS> = [
		"html",
		"css",
		"javascript",
		"typescript",
		"python",
		"java",
	];
	const displayedSkills2: Array<keyof typeof TECH_STACKS> = [
		"angular",
		"react",
		"nextjs",
		"nodejs",
		"expressjs",
		"gsap",
		"web3",
		"redux",
		"mySQL",
		"postgreSQL",
		"mongodb",
	];
	return (
		<>
			<div className={styles.container} ref={mobileSkillsContainerRef} id="skills-section">
				<div className={styles.contentWrapper} data-key="skills-content">
					<div className={styles.wrapper}>
						<div className={styles.heading}>
							<h2 className={styles.subTitle} ref={mobileSkillsSectionTitlteRef}>
								<span>
									<span>Mastering</span>
								</span>
								<span>
									<span>
										<strong>these skills with</strong>
									</span>
								</span>
								<span>
									<span>Passion and Precision</span>
								</span>
							</h2>
						</div>
						<div className={styles.skillsList} data-key="lists-wrapper">
							<div className={styles.skillsListInner}>
								<section className={styles.skills} data-key="skill">
									<h3>Languages</h3>
									<ul>
										{displayedSkills.map((key, i) => {
											const skill = TECH_STACKS[key];

											if (!skill) return null;

											return (
												<li key={i}>
													<span>
														<span className={styles.circle}></span>
														{skill?.label}
													</span>
												</li>
											);
										})}
									</ul>
								</section>
								<section className={styles.skills} data-key="skill">
									<h3>Special</h3>
									<ul>
										<li>
											<span>
												<span className={styles.circle}></span>
												Googling <span>😜</span>
											</span>
										</li>
									</ul>
								</section>
							</div>

							<div className={styles.skillsListInner}>
								<section className={styles.skills + " " + styles.others} data-key="skill">
									<h3>Frameworks/ Libraries/ Others</h3>
									<ul>
										{displayedSkills2.map((key, i) => {
											const skill = TECH_STACKS[key];
											return (
												<li key={i}>
													<span>
														<span className={styles.circle}></span>
														{skill?.label}
													</span>
												</li>
											);
										})}
									</ul>
									<p>
										Developers need <strong> to learn everyday </strong> so just trying to get along with everyone 😅. <br />
									</p>
								</section>
							</div>
						</div>
					</div>
					<FaintBgText
						text="skills"
						containerStyles={{ width: "68vw", right: "0px", bottom: "0%" }}
						svgStyles={{ height: "30vw" }}
						textStyles={{ fontSize: "30vw" }}
					/>
				</div>
			</div>

			<div className={styles.imageSection}>
				<Image src="/home-banner.jpeg" layout="fill" objectFit="cover" alt="My hand" objectPosition="left" />
			</div>
		</>
	);
}
