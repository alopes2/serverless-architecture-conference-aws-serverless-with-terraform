
variable "name" {
  description = "The name of the Lambda function"
  type        = string
  nullable    = false
}

variable "environment_variables" {
  description = "The environment variables for this lambda"
  type        = map(string)
  default     = {}
}

variable "source_file_path" {
  description = "The path to the source file code"
  type        = string
}

variable "policies" {
  description = "The policies for this lambda."
  type        = string
  default     = null
}
