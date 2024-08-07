const Description = ({ description }: { description: string }) => {
	return (
		<div className='game-page__description'>
			<div className='game-page__description__title'>Описание</div>
			<div className='game-page__description__text'>{description}</div>
		</div>
	)
}

export default Description
