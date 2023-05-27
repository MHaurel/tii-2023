import { Step, StepLabel, Stepper, StepConnector, stepConnectorClasses } from "@mui/material";
import { Check } from "@mui/icons-material";
import { styled } from "@mui/material";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.secondary.main
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.secondary.main
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: theme.palette.secondary.main
    }),
    '& .QontoStepIcon-completedIcon': {
      color: theme.palette.secondary.main,
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
}));
  

function QontoStepIcon(props) {
    const { active, completed, className } = props;
  
    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
}

const steps = [
    'Initial weight',
    'Training',
    'Goal weight'
]

const CAL_PER_KG = 7700;

function ObjectiveStepper() {
    const {authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser} = useContext(AuthContext);
    
    let activeStep = 0;
    
    if (user !== null) {
        let counter_ = 0
        let initialWeight = user.weightStart;
        let goalWeight = user.weightGoal;
        user.activities.forEach((act, i) => {
            counter_ += act.consumedCalories;
        });
        let currentWeight = initialWeight - Math.floor(counter_/CAL_PER_KG);

        if (currentWeight === initialWeight) {
            activeStep = 0;
        } else if (currentWeight < initialWeight && currentWeight > goalWeight) {
            activeStep = 1;
        } else if (currentWeight <= goalWeight) {
            activeStep = 3;
        }
    }

    return (
        <div>
            <p>The progression of your training</p>
            <Stepper activeStep={activeStep} connector={<QontoConnector/>}>
                {steps.map((label, index) => {
                    return (
                        <Step key={label}>
                            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
        </div>
    )
}

export default ObjectiveStepper;