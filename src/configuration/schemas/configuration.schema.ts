export const ConfigurationSchema = {
    apiUrl: { type: String, required: true },
    trustThreshold: { type: Number, default: 70 },
    claimFetchLimit: { type: Number, default: 100 },
  };