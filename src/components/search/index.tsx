import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../redux/filterSlice'

export const Search = () => {
  const dispatch = useDispatch()

  const handleChange = (e: any) => {
    dispatch(setFilter(e.target.value))
  }

  return (
    <Input
      size="large"
      placeholder="Поиск..."
      suffix={<SearchOutlined />}
      style={{ width: '300px' }}
      className="search-field"
      onChange={handleChange}
    />
  )
}
