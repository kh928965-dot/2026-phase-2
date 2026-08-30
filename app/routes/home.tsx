import { useEffect, useState } from "react"
import { Link } from "react-router"
import { Button } from "~/components/ui/button"

export default function TopPage() {
	const [message, setMessage] = useState<string | null>(null)
	useEffect(() => {
		fetch(`${window.location.origin}/api/hello-react-router`)
			.then((res) => res.json())
			.then((json) => setMessage(json.message))
	}, [])

	return (
		<div className="flex flex-col items-center text-center">
			<h1>トップページ</h1>
			<Button
				variant="brand"
				size="xl"
				className="rounded-2xl w-[200px] h-[100px]"
				asChild
			>
				<Link to="/app/live/create">ログイン</Link>
			</Button>
			<div>{message}</div>
		</div>
	)
}
