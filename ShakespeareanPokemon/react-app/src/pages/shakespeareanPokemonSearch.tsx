import { Component, FormEvent, createRef } from 'react';
import { RouteComponentProps } from "react-router";
import {withRouter } from "react-router-dom";
import { RootState } from '../store/store';
import { connect, ConnectedProps } from "react-redux"
import { 
    DefaultButton, 
    TextField
} from '@fluentui/react';
import {
    getPokemon,
} from '../store/asyncActions/pokemonAsyncActions';
import { Pokemon } from '../store/models/pokemon';
import ErrorModal from '../common/errorModal';
import Spinner from '../common/spinner';
import { getErrorMessage } from '../helpers/errorHelper';
import { setErrorMessage } from '../store/reducers/configSlice';


const mapStateToProps = (state: RootState) => ({
    pokemon: state.config.pokemon,
    searchPokemon: state.config.searchPokemon,
    searchFinished: state.config.searchFinished,
    errorMessage: state.config.errorMessage
    
})

const mapDispatch = {
    setErrorMessage: setErrorMessage,
    getPokemonAction: getPokemon,
}

const connector = connect(mapStateToProps, mapDispatch);

interface ShakespeareanPokemonSearchProps {
    pokemon?: Pokemon,
}

interface ShakespeareanPokemonSearchState {
    pokemonName?: string,
    
}



type ShakespeareanPokemonSearchCombinedProps = ConnectedProps<typeof connector> & ShakespeareanPokemonSearchProps & RouteComponentProps<any>;

class ShakespeareanPokemonSearch extends Component<ShakespeareanPokemonSearchCombinedProps, ShakespeareanPokemonSearchState> {
    myDiv: React.RefObject<HTMLDivElement>;

    constructor(props: any) {
        super(props);
        this.myDiv = createRef();
    }


    private async updatePokemon() {

        await this.props.getPokemonAction(this.state.pokemonName);

    }

    onDismissError = (ev?: React.MouseEvent<HTMLElement | HTMLButtonElement, MouseEvent> | any | undefined ) => {
        this.props.setErrorMessage(undefined);
    }

    private onChangeField(event: FormEvent<HTMLInputElement | HTMLTextAreaElement >, newValue?: string | undefined) {
        if(event.currentTarget.id.includes("pokemonName")){
            this.setState({pokemonName: newValue});
        }
    };

    
    componentDidMount() {
        this.setState({ pokemonName: undefined});
    }
    
    render() {
        console.log(this.state);
        return (
            <div>
                <img src="/logo.png" alt="Logo" className="bgImage" />
                <div style={{ backgroundColor: "white", minWidth: '94vw',paddingTop: 20, paddingLeft: 35, paddingRight: 35, paddingBottom: 20 }}>
                    <div>
                        <span className="title">Shakespearean Pokemon Search</span>
                    </div>
                    <div className="flex flex-row justify-center">  
                        <div className="bootstrap-wrapper container-fluid">
                            <div className="flex flex-row justify-center">
                                <div className="bootstrap-wrapper row">
                                    <div className="bootstrap-wrapper col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-2">
                                        <div></div>
                                    </div>      
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div style={{ backgroundColor: "white", minWidth: '94vw', paddingBottom: 40, paddingLeft: 0, paddingRight: 0 }}>
                    {(this.props.errorMessage) &&
                        <ErrorModal onDismiss={this.onDismissError} message={this.props.errorMessage ?? ''} showMessage={this.props.errorMessage? true: false }/>
                    }
                    
                    {this.props.searchPokemon &&
                        <Spinner message='Loading Items' />
                    }
                    {this.state &&      
                    <div className="flex flex-row justify-center">
                        <div className="bootstrap-wrapper row">          
                            <div className="bootstrap-wrapper col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <TextField label="Search by Pokemon Name" className='textField' id="pokemonName" value={this.state.pokemonName} style={{ minWidth:'300px'}} onChange={this.onChangeField.bind(this)}/>
                            </div>
                            <div className="bootstrap-wrapper col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="flex flex-row justify-center">
                                    <DefaultButton iconProps={{ iconName: "Search" }} title="Search" text="Search" ariaLabel="Search" onClick={(ev) => this.updatePokemon()} />
                                </div>
                            </div>
                            {this.props.pokemon?.name &&
                                <div className="bootstrap-wrapper col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div className="flex flex-row justify-center">
                                        <div className='card'>
                                            <div className='cardText'>{this.props.pokemon?.name}</div><br/>
                                            <div className='cardSubText'>{this.props.pokemon?.description}</div>
                                            
                                        </div>
                                    </div>
                                </div>
                            }
                            
                        </div>
                        
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(connector(ShakespeareanPokemonSearch));