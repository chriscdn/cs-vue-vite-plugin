import { format } from "date-fns";

// unused at the moment
export default {
  methods: {
    dateFormat(d, frm = "PPpp") {
      return format(new Date(d), frm);
    },
  },
};
