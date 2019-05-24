export interface EzListBox {
    label: string;
    icon?: string;
    index?: number;
}

export interface ProgressOptions {
    timingFunc?: string;
    displayValue?: boolean;
    height?: number;
    time?: number;
    bgColor?: string;
    textColor?: string;
    progressBgColor?: string;
    striped?: boolean;
    stripeAnimated?: boolean;
}
