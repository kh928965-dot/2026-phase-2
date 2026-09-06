import { Link } from "react-router"
import { Button } from "~/components/ui/button"
import { loader as helloLoader } from "~/routes/app/api/hello-react-router"
import type { Route } from "./+types/home"

export async function loader() {
	const data = await helloLoader()
	return { message: data.message }
}

export default function TopPage({ loaderData }: Route.ComponentProps) {
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
			<div>{loaderData.message}</div>
		</div>
	)
}
