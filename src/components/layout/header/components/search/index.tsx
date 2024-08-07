import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../../../../redux/filterSlice'

export const Search = () => {
	const dispatch = useDispatch()

	const handleChange = (e: any) => {
		dispatch(setFilter(e.target.value))
	}

	return (
		<Input
			size='large'
			placeholder='Поиск...'
			suffix={<SearchOutlined />}
			className='search-field'
			onChange={handleChange}
		/>
	)
}
