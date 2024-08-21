import { Box } from '@mui/material'
import Button from '@mui/material/Button';
import CreateList from '../components/CreateList'
import { useState } from 'react'

function Home() {
	const [list, setList] = useState([])
	const [showForm, setShowForm] = useState(false)

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'left',
				width: '100vw',
				padding: '2rem',
				boxSizing: 'border-box'
			}}
		>
			<h1>Hi, Username.</h1>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					paddingY: '1rem',
					width: '100%',
					justifyContent: 'space-between'
				}}
			>
				<h2>Your Lists</h2>
				<Button variant="outlined" onClick={() => setShowForm(!showForm)}>Create New List

				</Button>
			</Box>
			{showForm ? <CreateList list={list} setList={setList} /> : null}

			<Box
				sx={{
					display: 'flex',
					gap: '10px',
					paddingTop: '10px',
					flexWrap: 'wrap'
				}}
			>
				{list.map((item, index) => {
					return (
						<Box
							sx={{
								width: 100,
								height: 100,
								borderRadius: 1,
								border: "1px solid black"

							}}
							key={index}
						>
							{item.name} {item.description}
						</Box>
					)
				})}
			</Box>
		</Box>
	)
}

export default Home