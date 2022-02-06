import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
const Home = ({ match }) => {
	return (
		<div>
			<Suspense fallback={<Loading cover="content" />}>
				<Switch>
					<Route exact path={`${match.url}/clients/list`} component={lazy(() => import(`./clients`))} />
					<Route exact path={`${match.url}/client/:id`} component={lazy(() => import(`./profile`))} />
					<Redirect exact from={`${match.url}`} to={`${match.url}/clients/list`} />
				</Switch>
			</Suspense>		
		</div>
	)
}

export default Home
