const Trailer = ({ trailer }: { trailer: string }) => {
	return (
		<div className='game-page__trailer-wrapper'>
			<iframe
				className='game-page__trailer'
				allowFullScreen
				src={trailer}
				title='YouTube'
			/>
		</div>
	)
}

export default Trailer
