﻿using System.ComponentModel.DataAnnotations;

namespace JobApplicationAPI.ModelDTOs
{
    public class LoginDTO
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
