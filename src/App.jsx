import { useDisclosure } from '@mantine/hooks';
import { Flex, Modal, Button } from '@mantine/core';
import { useEffect } from 'react';
import Search from './components/search/Search';

export default function App() {
	const [opened, { open, close }] = useDisclosure(false);

	const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
	const search = 'JavaScript';
	useEffect(() => {
		fetch(
			`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=1&q=${search}`
		)
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, []);

	return (
		<Flex gap={'lg'}>
			<Search/>
			<Button color="red"> Change Color</Button>
			<Modal opened={opened} onClose={close} title="Authentication">
				<p>Haha</p>
			</Modal>

			<input onClick={open} />
		</Flex>
	);
}
