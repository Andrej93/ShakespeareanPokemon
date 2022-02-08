import Nav from "../common/nav";
import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Spinner from '../common/spinner';
const ShakespeareanPokemonSearch = lazy(() => import('../pages/shakespeareanPokemonSearch'));


export const router = (props: any) => {
    return (
        <>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Suspense fallback={<Spinner message="Loading..."/>}>
                        <ShakespeareanPokemonSearch />
                    </Suspense>
                </Route>
            </Switch>
            
        </>
    );
};
