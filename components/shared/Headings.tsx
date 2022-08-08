import React from "react";

//FontAwesome
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Props {
	children: React.ReactNode | React.ReactNode[];
	className?: string;
	icon?: IconDefinition;
	onClick?: () => void;
}

export const H1 = (props: Props) => {
	return (
		<h1
			onClick={props.onClick}
			className={`${props.className} font-normal text-7xl`}
		>
			{props.children}
		</h1>
	);
};

export const H2 = (props: Props) => {
	return (
		<h2
			onClick={props.onClick}
			className={`${props.className} font-normal text-[3.375rem] leading-[1]`}
		>
			{props.children}
		</h2>
	);
};

export const H3 = (props: Props) => {
	return (
		<h3
			onClick={props.onClick}
			className={`${props.className} font-normal text-[2.625rem] leading-[54px]`}
		>
			{props.children}
		</h3>
	);
};

export const H4 = (props: Props) => {
	return (
		<h4
			onClick={props.onClick}
			className={`${props.className} font-normal  text-[2rem] leading-[46px]`}
		>
			{props.children}
		</h4>
	);
};

export const H5 = (props: Props) => {
	return (
		<h5
			onClick={props.onClick}
			className={`${props.className} font-normal text-[1.375rem] leading-[32px]`}
		>
			{props.children}
		</h5>
	);
};
export const H6 = (props: Props) => {
	return (
		<h6
			onClick={props.onClick}
			className={`${props.className} font-normal text-base`}
		>
			{props.children}
		</h6>
	);
};
export const Title = (props: Props) => {
	return (
		<div
			onClick={props.onClick}
			className={`${props.className} font-semibold  text-sm`}
		>
			{props.children}
		</div>
	);
};
export const Text = (props: Props) => {
	return (
		<div
			onClick={props.onClick}
			className={`${props.className} font-normal text-sm`}
		>
			{props.children}
		</div>
	);
};

export const Smalltitle = (props: Props) => {
	return (
		<div
			onClick={props.onClick}
			className={`${props.className} font-semibold text-xs`}
		>
			{props.children}
		</div>
	);
};

export const Smalltext = (props: Props) => {
	return (
		<div
			onClick={props.onClick}
			className={`${props.className} font-normal text-xs`}
		>
			{props.children}
		</div>
	);
};
