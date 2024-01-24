import type { WorkflowStatusEnum } from "./WorkflowStatusEnum";
export type RHWorkStatusSerializer = {
    readonly title: string;
    readonly statusverbose: string;
    readonly attributes: Record<string, any>;
    readonly status: WorkflowStatusEnum;
    readonly mapid: number;
    readonly workid: number;
    readonly subworkid: number;
    readonly url: string;
    readonly statuscolour: string;
    readonly due: string | null;
    readonly startDate: string;
};
