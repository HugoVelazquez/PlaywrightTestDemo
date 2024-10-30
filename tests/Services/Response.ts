export class AnalizeImageListResponse {
    Images: ImageData[];
    status: number;

    constructor(Images: ImageData[]) {
        this.Images = Images;
    }

    // Static method to map JSON to an instance of AnalizeImageListResponse
    static fromJSON(responseJson: any): AnalizeImageListResponse {
        const images = responseJson.map((image: any) => ({
            imageUrl: image.imageUrl,
            analysisDetail: image.analysisDetail.map((detail: any) => ({
                label: detail.label,
                confidence: detail.confidence,
                isModeration: detail.isModeration,
            })),
        }));

        return new AnalizeImageListResponse(images);
    }
}

// Define the interface for individual analysis details
interface AnalysisDetail {
    label: string;
    confidence: number;
    isModeration: boolean;
}

// Define the interface for the image data structure
interface ImageData {
    imageUrl: string;
    analysisDetail: AnalysisDetail[];
}

