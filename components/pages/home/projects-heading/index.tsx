import { Ref } from "react";
import styles from "./styles.module.scss";

export default function Heading({ projectTitleRef }: { projectTitleRef: Ref<HTMLHeadingElement> }) {
	return (
		<h2 className={styles.sectionTitle} ref={projectTitleRef}>
			<span>
				<span>Some</span>
			</span>
			<span>
				<span>selective</span>
			</span>
			<span>
				<span>
					<strong>Projects</strong>
				</span>
			</span>
		</h2>
	);
}
