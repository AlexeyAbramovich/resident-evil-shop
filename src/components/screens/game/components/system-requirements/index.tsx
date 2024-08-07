const SystemRequirements = ({
	systemRequirements,
}: {
	systemRequirements: string
}) => {
	return (
		<div className='game-page__system-requirements'>
			<div className='game-page__system-requirements__title'>
				Системные&nbsp;требования
			</div>
			<div className='game-page__system-requirements__text'>
				{systemRequirements}
			</div>
		</div>
	)
}

export default SystemRequirements
