import { ModalWrapper } from "#/components";
import { TFilterBy } from "#/types";
import ProjectsFilter from "./projects-filter";

export default function ProjectsFilterModal({
	isOpen,
	onFilterProjects,
	onCloseFilter,
	filterKey,
	filterBy,
	onSelectFilterBy,
}: {
	isOpen: boolean;
	onFilterProjects: ({ key }: { key: string }) => void;
	onCloseFilter: () => void;
	filterKey: string;
	filterBy: TFilterBy;
	onSelectFilterBy: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<ModalWrapper show={isOpen}>
			<ProjectsFilter
				onFilterProjects={onFilterProjects}
				onCloseFilter={onCloseFilter}
				filterKey={filterKey}
				filterBy={filterBy}
				onSelectFilterBy={onSelectFilterBy}
			/>
		</ModalWrapper>
	);
}
