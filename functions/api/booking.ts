import { handleLead, type Env } from "../_lib/lead";

export const onRequestPost = ({
  request,
  env,
}: {
  request: Request;
  env: Env;
}) => handleLead(request, env, "booking");
