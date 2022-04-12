import MyLabel from "../../components/MyLabel";
import { IProps } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Components/MyLabel',
    component: MyLabel,
    argTypes: {
        size: {
            control: 'select'
        },
        fontColor: {
            control: 'color' 
        }
    }
} as ComponentMeta<typeof MyLabel>

const Template:ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>

export const Basic = Template.bind({});
Basic.args = {
    label: "Example",
    size: 'h1',
    allCaps: false
}


export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps:true,
    color:'secondary'
}

export const Tertiary = Template.bind({});

export const CustomBotton = Template.bind({});
CustomBotton.args = {
    size: 'h1',
    allCaps:true,
    color:'primary',
    fontColor: '#141'
}