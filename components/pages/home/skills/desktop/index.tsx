import styles from "./styles.module.scss";
import { TECH_STACKS } from "#/constants";
import { Ref } from "react";
import { FaintBgText } from "#/components";
import { events, registerEvent } from "#/utils/analytics/events";
import Link from "next/link";

export type SkillsDesktopProps = {
	skillsContainerRef: Ref<HTMLDivElement>;
	skillsSectionTitlteRef: Ref<HTMLHeadingElement>;
};
export default function SkillsDesktop({ skillsContainerRef, skillsSectionTitlteRef }: SkillsDesktopProps) {
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
		<div className={styles.container} ref={skillsContainerRef} id="skills-section">
			<div className={styles.contentWrapper} data-key="skills-content">
				<div className={styles.image} data-key="hand-image"></div>
				<div className={styles.wrapper}>
					<div className={styles.heading}>
						<h2 className={styles.subTitle} ref={skillsSectionTitlteRef}>
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

					<div className={styles.skillsList} data-key="skills-list">
						<div></div>
						<div>
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
				<FaintBgText
					text="skills"
					containerStyles={{ width: "42vw", right: "0px", bottom: "0%" }}
					svgStyles={{ height: "15vw" }}
				/>
			</div>
		</div>
	);
}
