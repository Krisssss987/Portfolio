import Link from "next/link";
import styles from "../styles.module.scss";
import { Form } from "./form";
import { Ref } from "react";
export function Details({
	containerRef,
	isFooterFixed,
	handlePageGAEvents,
}: {
	containerRef: Ref<HTMLDivElement>;
	isFooterFixed: boolean;
	handlePageGAEvents: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}) {
	///////
	return (
		<div
			className={styles.container}
			ref={containerRef}
			data-key="contact-form"
			style={{ position: isFooterFixed ? "fixed" : "relative" }}
		>
			<div className={styles.containerInner}>
				<div className={styles.leftSection}>
					<div className={styles.top}></div>
					<div>
						<div className={styles.helpfulLinks}>
							<h3>Quick Links</h3>
							<ul>
								<li>
									<Link href="/" passHref>
										<a>
											<span>Home</span>
										</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className={styles.helpfulLinks}>
							<h3>Extras</h3>
							<ul>
								<li>
									<Link href="https://drive.google.com/file/d/1WkfMZeVyQZ2yIBbiLikj-_U-YqgjFd7q/view?usp=drive_link">
										<a target="_blank" onClick={handlePageGAEvents} data-link="resume">
											<span>Resume</span>
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.formSection}>
					<Form />
				</div>
			</div>
			<div className={styles.social}>
				<ul>
					<li>
						<Link href="https://www.linkedin.com/in/krishna-lokhande-b29622222/" passHref>
							<a target="_blank" onClick={handlePageGAEvents} data-link="linkedin">
								<span>Linkedin</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="https://github.com/Krisssss987" passHref>
							<a target="_blank" onClick={handlePageGAEvents} data-link="github">
								<span>Github</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="https://www.instagram.com/krish.lok/" passHref>
							<a target="_blank" onClick={handlePageGAEvents} data-link="twitter">
								<span>Instagram</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="mailto: krishnalokhande987@gmail.com" passHref>
							<a target="_blank" onClick={handlePageGAEvents} data-link="email">
								<span>Email</span>
							</a>
						</Link>
					</li>
				</ul>

				<p> &#169; 2024 Krishna Lokhande</p>
			</div>
		</div>
	);
}
