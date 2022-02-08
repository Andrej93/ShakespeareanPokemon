import React, { FunctionComponent } from 'react';
import { DefaultButton, FontIcon, Modal,getTheme, mergeStyleSets, FontWeights, IconButton, IButtonStyles, IIconProps} from '@fluentui/react';

type ErrorModalProps = {
    message: string
    onDismiss: (ev?: React.MouseEvent<HTMLElement | HTMLButtonElement, MouseEvent> | undefined) => any,
    showMessage: boolean
}
const cancelIcon: IIconProps = { iconName: 'Cancel' };

const theme = getTheme();

const contentStyles = mergeStyleSets({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
        backgroundColor: '#F87171',
        border: `4px solid #F85858`,
        maxWidth: '400px'
    },
    header: [
        theme.fonts.xLarge,
        {
            flex: '1 1 auto',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            fontWeight: FontWeights.semibold,
            padding: '12px 12px 14px 24px',
        },
    ],
    body: {
        fontSize: theme.fonts.large,
        flex: '4 4 auto',
        color: 'white',
        padding: '0 24px 24px 24px',
        overflowY: 'hidden',
        fontWeight: FontWeights.semibold,
        selectors: {
            p: { margin: '14px 0' },
            'p:first-child': { marginTop: 0 },
            'p:last-child': { marginBottom: 0 },
            
        },
    },
  });

  const iconButtonStyles: Partial<IButtonStyles> = {
    root: {
      color: theme.palette.neutralPrimary,
      marginLeft: 'auto',
      marginTop: '4px',
      marginRight: '2px',
    },
    rootHovered: {
      color: theme.palette.neutralDark,
    },
  };
  
const ErrorModal: FunctionComponent<ErrorModalProps> = ({ message, onDismiss, showMessage }) => {
    return (
        
        <div className="flex justify-center custom-font">
            {/*<Modal
                isOpen={showMessage}
                onDismiss={onDismiss}
                isBlocking={false}
                containerClassName={contentStyles.container}
            >
                <div className={contentStyles.header}>
                <span >Error:</span>
                            
                
                </div>
                <div className={contentStyles.body}>
                    <span>
                        <br />
                        <br />
                        {message}
                    </span>
                </div>
                
            </Modal>*/}
            
        </div> 
    )
}

export default ErrorModal;