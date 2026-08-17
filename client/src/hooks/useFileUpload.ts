import { useCallback, useState } from "react";

interface UploadResult {
  key: string;
  url: string;
}

export function useFileUpload() {
  const [uploading, setUploading] = useState(false);

  const upload = useCallback(async (_file: File): Promise<UploadResult> => {
    setUploading(true);
    try {
      throw new Error("File uploads are not available until a server-side storage endpoint is configured.");
    } finally {
      setUploading(false);
    }
  }, []);

  return { upload, uploading };
}

export default useFileUpload;
