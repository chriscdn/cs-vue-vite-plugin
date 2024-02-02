import type { WorkflowStatusEnum } from "./WorkflowStatusEnum";
export type RHWorkStatusSerializer = {
    readonly title: string;
    readonly statusverbose: string;
    readonly attributes: Record<string, any>;
    readonly status: WorkflowStatusEnum;
    readonly mapId: number;
    readonly workId: number;
    readonly subWorkId: number;
    readonly url: string;
    readonly statuscolour: string;
    readonly due: string | null;
    readonly startDate: string;
};
