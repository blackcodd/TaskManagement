using System.ComponentModel.DataAnnotations;

namespace backend.DTOs
{
    public class CreateTaskDto
    {
        [Required(ErrorMessage = "Title is required.")]
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
    }

    public class UpdateTaskDto
    {
        [Required(ErrorMessage = "Title is required.")]
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public bool IsCompleted { get; set; }
    }
}
