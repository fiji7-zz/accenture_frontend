import React, { useEffect, useReducer, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryData, fetchCoordinatorData } from '../redux/actions'
import {
    FormLabel,
    FormInput,
    FormLabelRadio,
    FormInputRadio,
    FormRow,
    FormSelect,
    FormTextArea,
    FormInfo,
    SubmitContainer,
    SubmitInput,
    ConditionalFormLabel,
    Container,
    ContainerTitle,
    Counter,
    CounterLabel,
    ErrorLabel,
} from '../styles'
import { validation } from '../helpers/validation'
import { str2bool, convertedDate, multiplyDuration } from '../helpers/utils'

export const MainForm = () => {

    const initialState = {
        title: '',
        description: '',
        category: 'select category',
        payment: 'free event',
        fee: '',
        reward: '',
        responsible: 'Daniel Mitchell',
        email: '',
        date: '',
        timeUnit: '',
        time: 'am',
        duration: '',
    }
    const [change, setError] = useState({
        errors: {
            titleError: '',
            descriptionError: '',
            dateError: '',
            feeError: '',
            emailError: '',
            durationError: ''
        }
    })

    const localReducer = (state, { field, value }) => {
        return {
            ...state,
            [field]: value,
        }
    };

    const [state, localDispatch] = useReducer(localReducer, initialState)

    const onChange = (e) => {
        localDispatch({ field: e.target.name, value: e.target.value })
    }

    const { title, description, category, payment, fee, reward, email } = state;

    const dispatch = useDispatch();

    const handleValidation = () => {
       const arrayOfErrors = validation(
           state.title, 
           state.description, 
           charactersLeft, 
           state.date, 
           state.duration, 
           isPaidEvent, 
           state.fee, 
           state.email);

        setError({
            titleError: arrayOfErrors[0],
            descriptionError: arrayOfErrors[1],
            dateError: arrayOfErrors[2],
            feeError: arrayOfErrors[3],
            emailError: arrayOfErrors[4],
            durationError: arrayOfErrors[5],
        })

        return arrayOfErrors[6];
    }

    const history = useHistory();
    const onSubmit = (e) => {
        if (handleValidation()) {
            console.log({ 
                title, 
                description, 
                category_id: getCategoryID(categoryData, state.category), 
                paid_event: str2bool(payment), 
                event_fee: fee, 
                reward, 
                date: convertedDate(state.date), 
                duration: multiplyDuration(state.duration), 
                coordinator: { email: email, id: getCoordinatorID(coordinatorData, state.responsible) }});

            history.push('/success');
        } else {
            alert('Form has errors.');
        }
        e.preventDefault();
    }

    useEffect(() => {
        dispatch(fetchCategoryData());
        dispatch(fetchCoordinatorData());

    }, [dispatch]);

    const categoryData = useSelector(state => state.formCategoryData);
    const coordinatorData = useSelector(state => state.formCoordinatorData);
    const isPaidEvent = str2bool(state.payment);
    const charactersLeft = 140 - state.description.length;

    function getCoordinatorID(object, value) {
        const lastName = object.map(el => el.lastname)
        return lastName.indexOf(value.split(" ").pop())
    }

    function getCategoryID(object, value) {
        const name = object.map(el => el.name)
        return name.indexOf(value)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <Container>
                    <ContainerTitle>About</ContainerTitle>
                    <FormRow>
                        <FormLabel>Title</FormLabel>
                        <FormInput type="text" name="title" value={title} onChange={onChange} placeholder="Make it short and clear" />
                        <ErrorLabel>{change.titleError}</ErrorLabel>
                    </FormRow>
                    <FormRow>
                        <FormLabel>Description: </FormLabel>
                        <FormTextArea type="text" name="description" value={description} onChange={onChange} placeholder="Write about your event, be creative"/>
                        <ErrorLabel>{change.descriptionError}</ErrorLabel>
                    </FormRow>
                    <FormRow>
                        <Counter />
                        <CounterLabel>{charactersLeft} characters left.</CounterLabel>
                    </FormRow>
                    <FormRow>
                        <FormLabel>Category:</FormLabel>
                        <FormSelect name="category" value={category} onChange={onChange}>
                            <option value="select category" disabled>Select category</option>
                            {categoryData.map(item => (
                                <option key={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </FormSelect>
                    </FormRow>
                    <FormRow>
                        <FormLabel>Payment</FormLabel>
                        <FormLabelRadio>Free event:</FormLabelRadio>
                        <FormInputRadio
                            type="radio"
                            name="payment"
                            value="free event"
                            checked={state.payment === 'free event' ? true : false}
                            onChange={onChange}
                        />
                        <FormLabelRadio>Paid event:</FormLabelRadio>
                        <FormInputRadio
                            type="radio"
                            name="payment"
                            value="paid event"
                            checked={state.payment === 'paid event' ? true : false}
                            onChange={onChange}
                        />
                        {isPaidEvent && <ConditionalFormLabel><FormInput name="fee" value={fee} placeholder="Fee" onChange={onChange} /> $ <ErrorLabel>{change.feeError}</ErrorLabel></ConditionalFormLabel>}
                    </FormRow>
                    <FormRow>
                        <FormLabel>Reward:</FormLabel>
                        <FormInput type="text" name="reward" value={reward} onChange={onChange} placeholder="Number"/>
                        <FormInfo>points for attendance</FormInfo>
                    </FormRow>
                </Container>
                <Container>
                    <ContainerTitle>Coordinator</ContainerTitle>
                    <FormRow>
                        <FormLabel>Responsible:</FormLabel>
                        <FormSelect name="responsible" onChange={onChange} >
                            {coordinatorData.map(item => (
                                <option key={item.id}>
                                    {item.name} {item.lastname}
                                </option>
                            ))}
                        </FormSelect>
                    </FormRow>
                    <FormRow>
                        <FormLabel>Email:</FormLabel>
                        <FormInput
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={onChange}
                        />
                        <ErrorLabel>{change.emailError}</ErrorLabel>
                    </FormRow>
                </Container>
                <Container>
                    <ContainerTitle>When</ContainerTitle>
                    <FormRow>
                        <FormLabel>
                            Starts  on:</FormLabel>
                        <FormInput type="date"
                            name="date"
                            onChange={onChange}
                        />

                        <FormInfo>at:</FormInfo>
                        <FormInput type="time" name="timeUnit" onChange={onChange} />
                    </FormRow>
                    <FormRow>
                        <Counter />
                        <ErrorLabel>{change.dateError}</ErrorLabel>
                    </FormRow>
                    <FormRow>
                        <FormLabel>Duration:</FormLabel>
                        <FormInput type="text" name="duration" onChange={onChange} placeholder="Number"/>
                        <FormInfo>hour</FormInfo>
                    </FormRow>
                    <FormRow>
                        <Counter />
                        <ErrorLabel>{change.durationError}</ErrorLabel>
                    </FormRow>

                </Container>
                <SubmitContainer>
                    <SubmitInput type="submit" value="Publish event" />
                </SubmitContainer>
            </form>
        </div>
    )
}
